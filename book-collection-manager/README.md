# Book Collection Manager

แอปพลิเคชันจัดการคอลเลกชันหนังสือส่วนตัว พัฒนาด้วย React และ Vite

## คุณสมบัติ
- เพิ่ม/แก้ไข/ลบหนังสือในคอลเลกชัน
- ค้นหาหนังสือตามชื่อ
- กรองหนังสือตามหมวดหมู่
- ดูรายละเอียดหนังสือแต่ละเล่ม
- หน้าแรกแสดงสถิติและหนังสือล่าสุด

## การติดตั้ง
- คลอนโปรเจค: `git clone <repository-url>`
- เข้าโฟลเดอร์: `cd book-collection-manager`
- ติดตั้ง dependencies: `npm install`
- รันโปรเจค: `npm run dev`
- เปิดในเบราว์เซอร์: `http://localhost:5173`

## การใช้งาน
- หน้าแรก: `/` - ดูภาพรวมคอลเลกชัน
- รายการหนังสือ: `/books` - ค้นหา/กรอง/ลบ
- รายละเอียด: `/books/:id` - ดู/แก้ไข/ลบหนังสือ
- เพิ่มหนังสือ: `/books/add` - กรอกข้อมูลใหม่
- แก้ไข: `/books/edit/:id` - อัปเดตข้อมูล

## โครงสร้างโปรเจค
- `src/components/` - คอมโพเนนต์ที่ใช้ซ้ำ (เช่น BookCard, BookForm)
- `src/hooks/` - Custom Hooks (เช่น useBooks)
- `src/pages/` - หน้าเพจหลัก (เช่น HomePage, ListBooks)
- `src/utils/` - ฟังก์ชันช่วยเหลือ (เช่น constants.js)

## เทคโนโลยี
- React + Vite
- React Router DOM
- LocalStorage สำหรับเก็บข้อมูล
- CSS Inline (ปรับแต่งเพิ่มได้)

## หมายเหตุ
- ข้อมูลทั้งหมดเก็บใน localStorage
- รองรับ Responsive Design
- ปรับแต่ง UI ได้ตามต้องการ

## ผู้พัฒนา
- [ชื่อคุณ] - [อีเมลหรือ GitHub ของคุณ]