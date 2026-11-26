# Matt's Daycare website

A responsive, single-page static website for Matt's Daycare in Kanata, Ottawa.

## Run locally

No build tools or dependencies are required.

1. Download and unzip the project.
2. Open the folder in VS Code.
3. Open `index.html` in your browser, or use the **Live Server** VS Code extension.

## Deploy to Vercel

### Option 1: GitHub (recommended)
1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. In Vercel, select **Add New → Project** and import the repository.
4. Keep the framework preset as **Other**.
5. Leave Build Command and Output Directory blank.
6. Deploy.

### Option 2: Vercel CLI
Install the Vercel CLI, sign in, then run this from the project folder:

```bash
npm install -g vercel
vercel
```

Follow the prompts. For production deployment, run `vercel --prod`.

## Important: enquiry form

The form currently validates the fields and displays the requested confirmation message. It does **not** send or store enquiries yet. Before using the site with real families, connect the form to Formspree, Web3Forms, or a Vercel serverless function and test delivery.

## Before publishing

Verify all childcare licensing, subsidy, CPR/First Aid, background-check, meal, and operating-hours claims. Replace the sample stock photos with authentic photos of the daycare space where possible. Confirm the address and contact details are appropriate to publish.
