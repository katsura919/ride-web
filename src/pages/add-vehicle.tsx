export default function AddVehicle() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-700 bg-neutral-900 p-2 md:p-10">
      <div className="flex gap-2">
        {[...new Array(4)].map((_, idx) => (
          <div
            key={"first-array-demo-1" + idx}
            className="h-20 w-full animate-pulse rounded-lg bg-neutral-800"
          ></div>
        ))}
      </div>
      <div className="flex flex-1 gap-2">
        {[...new Array(2)].map((_, idx) => (
          <div
            key={"second-array-demo-1" + idx}
            className="h-full w-full animate-pulse rounded-lg bg-neutral-800"
          ></div>
        ))}
      </div>
    </div>
  );
}
