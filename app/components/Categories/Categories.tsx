"use client";
import React from "react";
import { Data } from "./Data";
type Props = {};

const Categories = (props: Props) => {
  return (
    <div className="flex gap-2">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sl No
              </th>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                No Of Courses
              </th>
              <th scope="col" className="px-6 py-3">
                Revenue share
              </th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.Id}</td>
                <td className="px-6 py-4">{item.Name}</td>
                <td className="px-6 py-4">{item.No_Of_Courses}</td>
                <td className="px-6 py-4">{item.No_Of_Courses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <input type="text" className="bg-gray-800 rounded-md" />
        <button className="bg-[#FFD700] text-black mt-2 px-3 rounded-sm">add new</button>
      </div>
    </div>
  );
};
//#212121
export default Categories;

// // "use client"
// import React, { useMemo } from "react";
// import { useTable } from "react-table";
// import { Columns } from "./Column";
// import { Data } from "./Data";

// type Props = {};

// const Categories = (props: Props) => {
//   const columns = useMemo(() => Columns as any, []);
//   const data = useMemo(() => Data, []);

//   const tableInstance = useTable({
//     columns,
//     data,
//   });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     tableInstance;
//   return (
//     <div className="flex justify-between dark:bg-gray-800">
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               <th></th>
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           <tr>
//             <td></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Categories;
