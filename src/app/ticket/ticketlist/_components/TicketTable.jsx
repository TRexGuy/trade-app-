"use client";

const tickets = [
    { id: "254863", title: "کیف پول", section: "پشتیبانی", date: "1401/03/03", status: "بسته‌شده" },
    { id: "254864", title: "کیف پول", section: "پشتیبانی", date: "1401/03/03", status: "در انتظار" },
    { id: "254865", title: "کیف پول", section: "پشتیبانی", date: "1401/03/03", status: "خوانده‌شده" },
    { id: "254866", title: "کیف پول", section: "پشتیبانی", date: "1401/03/03", status: "بسته‌شده" },
  ];
  
  export function TicketTable({ filter }) {
    const filteredTickets =
      filter === "all"
        ? tickets
        : tickets.filter((t) => {
            if (filter === "read") return t.status === "خوانده‌شده";
            if (filter === "waiting") return t.status === "در انتظار";
            if (filter === "closed") return t.status === "بسته‌شده";
            return true;
          });
  
    return (
      <div className="overflow-hidden]  text-sm">
        {/* Header row */}
        <div className="grid grid-cols-5  py-2 px-3 text-gray-400 text-center text-xs">
          <span>شماره تیکت</span>
          <span>عنوان</span>
          <span>بخش</span>
          <span>تاریخ ایجاد</span>
          <span>وضعیت</span>
        </div>
  
        {/* Rows */}
        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="grid grid-cols-5  items-center py-3 px-3 text-center border-t border-[#2A2A2D]"
          >
            <span className="text-gray-300">{ticket.id}</span>
            <span className="text-gray-300">{ticket.title}</span>
            <span className="text-gray-300">{ticket.section}</span>
            <span className="text-gray-400">{ticket.date}</span>
            <span className="flex justify-center">
              <button className="text-blue-400 hover:underline">مشاهده</button>
            </span>
          </div>
        ))}
      </div>
    );
  }
  