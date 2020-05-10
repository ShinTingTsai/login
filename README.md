# 登入頁

一個使用Express 與 Node.js + Express-Handlebars 開發的登入頁面

## 功能

- 使用者輸入帳密：email & password
- 如果找不到 username，或是 password 錯誤，介面會顯示 "Username/Password 錯誤"
- 如果 username + password 組合正確，使用者就能成功登入，並導向自己的 welcome page，在此頁面上會顯示登入使用者的 firstName。

## 環境建置與需求
- Node.js v10.15.0
- Express v4.17.1
- Express-Handlebars v4.0.4


## 安裝與執行步驟
- 下載專案到本機
```
git clone https://github.com/ShinTingTsai/login.git
```
- 切至專案資料夾
```
cd restaurant_list
```
- 安裝套件
```
npm install
```
- 開啟程式
```
npm run dev
```
- 請至http://localhost:3000開始使用程式


## 開發人員
Shin-Ting Tsai
