
# PDF Sharer
Application that allows it's users to upload a PDF file to the cloudinary platform and then copy the link to that file (to send it to someone else for example) or download it.
Main goal behind making it was to learn how cloudinary and multer works.


## Environment Variables

If you wish to run this project locally, you will need a bunch of env variables.

 `PORT` (can be random, was 9999 in my case)

 `DB_USER` 
 
 `DB_PASSWORD` 
 
 `DB_NAME`
 
 `CLOUDINARY_API_KEY`

 `CLOUDINARY_API_SECRET`

 `CLOUDINARY_API_CLOUD`

 `API_BASE_ENDPOINT` (your base frontend endpoint)

## Run Locally

Clone the project

```bash
  git clone https://github.com/kayYZ1/PDFSharer.git
  cd PDFSharer
```

Go to the projects directory

```bash
  cd client
  cd server
```

Install dependencies

```bash
  npm install
```

 Start the services

```bash
  npm run dev (both services)
```


