import Table from "./Table";

const Display = ({ tableHeadRow, options, i }) => {
  return (
    <>

      {Object.values(options).map((data, j) => (
        <Table
          key={data + i + j}
          title={
            (j == 0 && "Site Status") ||
            (j == 1 && "Warehouse Details") ||
            (j == 13 && "GST Details") ||
            (j == 17 && "Agreement Details") ||
            (j == 34 && "Compliance Details")
          }
          data={data}
          j={j}
          tableHeadRow={tableHeadRow}
        />

        // <div key={data + i + j}>
        //   {tableHeadRow[j]} ==== {data}
        // </div>
      ))}
    </>
  );
};

export default Display;
