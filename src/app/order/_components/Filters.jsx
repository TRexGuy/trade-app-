import AddCircle from "../../../assets/icons/AddCircle"
import FillCaretDown from "../../../assets/icons/FillCaretDown"

export default function Filters({ query, setQuery }) {
  return (
    <div className="flex flex-col  py-4 items-end gap-4">
    

      <div className="flex    mt-1 flex-row  gap-4">
        {/* فیلتر جفت ارز */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px]">جفت ارز</span>
          <div className="flex h-8 flex-row rounded-md border-2 border-[#31313a] bg-black/30">
            <button className="flex text-[10px] px-4 flex-row items-center">
              بیتکوین
              <FillCaretDown />
            </button>
            <button className="flex text-[10px] px-2 flex-row items-center">
              ریال
              <FillCaretDown />
            </button>
          </div>
        </div>

        {/* فیلتر تاریخ */}
        <div className="flex  flex-col items-center gap-2">
          <span className="text-[10px]">تاریخ</span>
          <input
            type="date"
            className="bg-black/30 border-2 border-[#31313a] rounded-md  h-8 text-[10px] text-white"
            value={query.date || ""}
            onChange={(e) => setQuery({ ...query, date: e.target.value })}
          />
        </div>

        {/* دکمه اعمال فیلتر */}
        <button className="bg-[#01e4f8] mt-5 px-2 py-2 text-[11px] rounded-md  text-white shadow-md hover:shadow-xl transition-shadow duration-200">
          اعمال فیلتر
        </button>

        {/* آیکون Add */}
        <button  className="mt-4  ">
          <AddCircle />
        </button>
      </div>
    </div>
  )
}
