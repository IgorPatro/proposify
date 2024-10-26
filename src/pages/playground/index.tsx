"use client";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
  DragOverlay,
  type DragStartEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import React, { type ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

const DndPlayground = () => {
  const [leftPanelItems] = useState([
    { bg: "bg-pink-500", value: 4 },
    { bg: "bg-yellow-500", value: 5 },
  ]);
  const [items, setItems] = useState([
    { bg: "bg-green-500", uuid: "4236", value: 1 },
    { bg: "bg-red-500", uuid: "4237", value: 2 },
    { bg: "bg-blue-500", uuid: "4238", value: 3 },
  ]);
  const [draggedElement, setDraggedElement] = useState<{
    id: string;
    isNew: boolean;
  } | null>(null);

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragStart(event: DragStartEvent) {
    if (event.active.data.current?.isNew) {
      return setDraggedElement({ id: event.active.id as string, isNew: true });
    }

    return setDraggedElement({ id: event.active.id as string, isNew: false });
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setDraggedElement(null);

    if (!over) {
      return;
    }

    const draggedItem = items.find((item) => item.uuid === active.id);
    const temporaryItems = items.filter((item) => item.uuid !== active.id);
    const dragEndItemIndex = temporaryItems.findIndex(
      (item) => item.uuid === over.id,
    );
    const itemFromSidebar = leftPanelItems.find(
      (item) => item.value === active.id,
    );

    // Note: Dropped below the list
    if (over.id === "below") {
      // Note: New item from left panel
      if (!draggedItem) {
        const newItems = [
          ...temporaryItems,
          { ...itemFromSidebar!, uuid: Math.random().toString() },
        ];
        return setItems(newItems);
      }

      const newItems = [...temporaryItems, draggedItem];
      return setItems(newItems);
    }

    // Note: New item from left panel
    if (!draggedItem) {
      const newItems = [
        ...temporaryItems.slice(0, dragEndItemIndex),
        { ...itemFromSidebar!, uuid: Math.random().toString() },
        ...temporaryItems.slice(dragEndItemIndex),
      ];

      return setItems(newItems);
    }

    const newItems = [
      ...temporaryItems.slice(0, dragEndItemIndex),
      draggedItem,
      ...temporaryItems.slice(dragEndItemIndex),
    ];

    return setItems(newItems);
  };

  const renderDraggedOverlay = () => {
    if (draggedElement?.isNew) {
      return (
        <div className="size-10 bg-black text-white">{draggedElement?.id}</div>
      );
    }

    return (
      <div className="h-10 w-full bg-red-500 text-white">
        {draggedElement?.id}
      </div>
    );
  };

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div className="flex gap-10">
        <div className="border p-5">
          {leftPanelItems.map((item) => (
            <DraggableItem item={item} key={item.value}>
              <button>{item.value}</button>
            </DraggableItem>
          ))}
        </div>

        <div className="flex w-full flex-col">
          {items.map((item) => (
            <ExistingBlock item={item} key={item.uuid} />
          ))}
          <DroppableSpaceBelow />
        </div>
      </div>

      <DragOverlay dropAnimation={null}>
        {draggedElement ? renderDraggedOverlay() : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DndPlayground;

function DroppableSpaceBelow() {
  const { isOver, setNodeRef } = useDroppable({
    id: "below",
  });

  return (
    <div
      className="h-64 w-full cursor-pointer bg-black text-white"
      ref={setNodeRef}
    >
      Drop here - {isOver ? "over" : "not over"}
    </div>
  );
}

function DraggableItem(props: {
  children: ReactNode;
  item: { bg: string; value: number };
}) {
  const { listeners, setNodeRef } = useDraggable({
    data: {
      ...props.item,
      isNew: true,
    },
    id: props.item.value,
  });

  return (
    <div
      className="size-10 cursor-pointer bg-black text-white"
      ref={setNodeRef}
      {...listeners}
    >
      {props.children}
    </div>
  );
}

function ExistingBlock(props: {
  item: { bg: string; uuid: string; value: number };
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.item.uuid,
  });
  const {
    active,
    listeners,
    setNodeRef: setDraggableRef,
  } = useDraggable({
    id: props.item.uuid,
  });

  const isActive = active?.id === props.item.uuid;

  if (isActive) {
    return null;
  }

  return (
    <>
      <div
        className={twMerge(
          isActive ? "invisible" : "visible",
          "flex flex-col gap-2",
        )}
        ref={setDraggableRef}
        {...listeners}
      >
        {isOver ? <div className="w-full p-2">Drop here</div> : null}
        <div className={twMerge("p-10", props.item.bg)} ref={setNodeRef}>
          {props.item.value} - {isActive ? "active" : "inactive"}
        </div>
      </div>
    </>
  );
}
