# 📖 Sanity CMS User Guide & Content Management Manual

Welcome to your **Portfolio Content Management System (CMS)**! This guide explains how to edit your profile, add new projects, manage work experience, upload your resume, reorder homepage sections, and read client messages.

---

## 🔑 1. How to Access Sanity Studio Admin

1. Open your browser and go to your live Sanity Studio URL:
   👉 **[https://sarav-portfolio.netlify.app/studio](https://sarav-portfolio.netlify.app/studio)**
   *(Or locally at [http://localhost:3000/studio](http://localhost:3000/studio))*
2. Click **Log in** with Google or GitHub (authorized account).
3. The **CMS Admin Dashboard** will open.

---

## ⚙️ 2. Editing Site Settings & Resume

Use **Site Settings** to update your global profile info, master tagline, resume PDF, and social links.

### How to update your Name, Title, Tagline, or Social Links:
1. Click **Site Settings** in the left sidebar.
2. Edit **Site Name** (e.g. `Sarav Jagadeesan`).
3. Edit **Designation** (e.g. `Platform Engineering Leader`).
4. Edit **Tagline** (e.g. `Expert in Platform Engineering | AIOPS | MLOPS | DEVOPS`).
5. Under **Social Links**, edit or add your LinkedIn/GitHub URLs.
6. Click the green **Publish** button at the bottom right.

### How to upload a new Resume PDF:
1. Click **Site Settings**.
2. Scroll to **Resume (PDF)**.
3. Click **Upload** and select your updated resume PDF file.
4. Click **Publish**. *(The "Download Resume" button on your site updates automatically!)*

---

## 🏡 3. Managing Homepage Sections (Home Page Builder)

Use **Home Page Builder** to reorder sections, hide sections, or edit text inside a specific homepage section.

### How to Reorder Homepage Sections:
1. Click **Home Page Builder** in the left sidebar.
2. Under **Page Sections (Drag to Reorder)**, grab any section item using the drag handle (`::`).
3. Drag the item up or down to your desired position.
4. Click **Publish**. *(Both the homepage layout and top navigation bar update instantly!)*

### How to Hide or Show a Section:
1. Click **Home Page Builder**.
2. Click on the section you want to hide (e.g., **Certifications**).
3. Toggle `Visible` to **Off** (or **On** to display it again).
4. Click **Publish**. *(The section and its nav link disappear cleanly from the website!)*

### How to Add a NEW Section to the Homepage:
1. Click **Home Page Builder**.
2. Scroll to the bottom and click **`+ Add item...`**.
3. Choose the section type (Hero, Metrics, Projects, Experience, Skills, Certifications, Contact, or Custom Block).
4. Click **Publish**.

---

## 📁 4. Managing Collections (Projects, Experience, Skills, Certifications)

Collections hold your individual showcase items.

### How to Add a New Project:
1. Click **Projects Collection** in the left sidebar.
2. Click **`+ Create`** (or **`+`** icon) at the top of the middle pane.
3. Fill in:
   - **Project Title**
   - **Year** (e.g. `2024`)
   - **Category** (e.g. `Infrastructure & Kubernetes`)
   - **Description**
   - **Technologies Used** (e.g. `AWS`, `Terraform`, `Go`)
   - **GitHub URL** / **Live Link**
   - **Featured Image** (Upload image asset)
4. Click **Publish**.

### How to Edit an Existing Project or Role:
1. Click **Projects Collection** (or **Experience Collection** / **Certifications Collection** / **Skills Collection**).
2. Click on the item from the list.
3. Edit any field.
4. Click **Publish**.

### How to Delete an Item:
1. Click on the item in the collection list.
2. Click the **three dots (`...`)** at top right of the editor pane → Select **Delete**.
3. Confirm deletion.

---

## 📬 5. Reading Client & Recruiter Messages

When visitors fill out the contact form on your website:

1. Click **Messages Inbox** in your Sanity Studio sidebar.
2. Click on any message entry from the list.
3. View **Sender Name**, **Sender Email**, **Subject**, **Message text**, and **Submitted At** timestamp.
4. You can change the **Status** field from `New` to `Read` or `Archived` to organize your inbox!

---

## ⚡ 6. How Live Publishing & Updates Work

- **Drafts:** As you type in Sanity Studio, your changes save as a draft automatically.
- **Publishing:** Your edits are **NOT live on the website until you click the green "Publish" button** at the bottom right.
- **Instant Live Update:** Once you click **Publish**, the background webhook notifies Netlify to purge its cache, and your website updates live within **2 to 5 seconds**!
