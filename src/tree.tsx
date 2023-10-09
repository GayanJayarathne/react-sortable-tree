import React, { useState } from "react";
import "@exytab/react-sortable-tree/dist/styles.css";
import { SortableTreeWithoutDndContext as SortableTree } from "@exytab/react-sortable-tree";
import { DndContext } from "react-dnd";

const seed = [
  {
    id: "123",
    title: "Line 1",
    subtitle: "zzz",
    isDirectory: true,
    expanded: true,
    children: [
      { id: "456", title: "Cutting", subtitle: "zzz" },
      {
        id: "789",
        title: "Nut Cutting",
        subtitle: "zzz",
        expanded: true,
        children: [
          {
            id: "234",
            title: "Store A",
            subtitle: "zzz",
          },
          { id: "567", title: "Store B", subtitle: "zzz" },
        ],
      },
    ],
  },
  {
    id: "456",
    title: "Line 2",
    subtitle: "zzz",
    isDirectory: true,
    expanded: true,
    children: [
      { id: "456", title: "Cutting", subtitle: "zzz" },
      {
        id: "789",
        title: "Nut Cutting",
        subtitle: "zzz",
        expanded: true,
        children: [
          {
            id: "234",
            title: "Store A",
            subtitle: "zzz",
          },
          { id: "567", title: "Store B", subtitle: "zzz" },
        ],
      },
    ],
  },
];

const Tree = () => {
  const [treeData, setTreeData] = useState(seed);
  const updateTreeData = (treeData: any) => {
    setTreeData(treeData);
  };

  return (
    <div style={{ height: 700, width: 500 }}>
      <DndContext.Consumer>
        {({ dragDropManager }) =>
          !dragDropManager ? undefined : (
            <SortableTree
              treeData={treeData}
              onChange={(treeData: any) => updateTreeData(treeData)}
            />
          )
        }
      </DndContext.Consumer>
    </div>
  );
};

export default Tree;
