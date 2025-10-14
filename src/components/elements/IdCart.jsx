import React from "react";

export default function IdentityInformationIcon({ isActive }) {
  // رنگ فعال و غیرفعال
  const activeColor = "#00e2fb"; // آبی وقتی فعال است
  const inactiveColor = "#8C9094"; // زرد یا هر رنگ پیش‌فرض

  return (
    <svg
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8769 14.2509H8.12345C3.6377 14.2509 -0.000488281 17.8886 -0.000488281 22.3748C-0.000488281 23.272 0.727056 24 1.6243 24H19.3769C20.2742 24.0014 21.0008 23.2748 21.0008 22.3748C21.0008 17.8886 17.3631 14.2509 12.8769 14.2509Z"
        fill={isActive ? activeColor : inactiveColor}
      />
      <path
        opacity="0.4"
        d="M16.5002 6.00037C16.5002 9.31416 13.8141 12.0007 10.4999 12.0007C7.18561 12.0007 4.49951 9.31463 4.49951 6.00037C4.49951 2.6861 7.18608 0 10.4999 0C13.8141 0 16.5002 2.68657 16.5002 6.00037Z"
        fill={isActive ? activeColor : inactiveColor}
      />
    </svg>
  );
}
