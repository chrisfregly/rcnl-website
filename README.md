# RCNL website

Rice Computational Neuromechanics Lab website. This project was created using the [Vite](https://vite.dev/) build tool, the [React](https://react.dev/) web library and the [Tailwind](https://tailwindcss.com/) CSS framework.

## Getting Started

### Local Development

If it is your first time running this project locally then please install all necessary packages by running:

```bash
npm install
```

Once installed, run the following command to kick off a local version of the website:

```bash
vite dev
```

Any changes made to the code on your local machine will automatically update the local version of the website.

### Remote Deployment

Once you have tested your changes, git commit and push them to the `main` branch. Then from your local machine run the following command:

```bash
npm run deploy
```

This will deploy your changes live to the [rcnl.rice.edu](rcnl.rice.edu) domain.

## How To

### Update the People Page

The people page is generated from information in a [people.json](src/components/people/people.json) file and photos from a [people](public/assets/people) folder. Here is an example of a person found in the [people.json](src/components/people/people.json) file:

```json
{
    "name": "B.J. Fregly",
    "role": "Lab Director",
    "titles": ["PhD"],
    "description": "Professor and CPRIT Scholar in Cancer Research",
    "website": "https://rcnl.rice.edu",
    // the 'email' field is only used if the 'website' field is left empty
    "email": "fregly@rice.edu",
    // the 'image' located relative to the 'public/assets/people/' path
    "image": "bj_fregly.jpg"
}
```

To add, remove, or update a person's information, just modify the [people.json](src/components/people/people.json) file. This should automatically update the people page.

### Update the Resources Page

Similar to the people page, the resources page is generated from information in a [resources.json](src/components/resources/resources.json) file and pdf files located in a [resources](public/assets/resources/) folder. Here is an example of a resource found in the [resources.json](src/components/resources/resources.json) file:

```json
{
    "name": "Lab Handbook",
    "description": "RCNL expectations and policies",
    // the 'file' located relative to the 'public/assets/resources/' path
    "file": "rcnl_handbook.pdf"
}
```

To add, remove, or update resource information, just modify the [resources.json](src/components/resources/resources.json) file. This should automatically update the resources page.
