import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // ดึงข้อมูลจาก localStorage หรือใช้ค่าเริ่มต้น
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // อัปเดต localStorage เมื่อ value เปลี่ยน
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;