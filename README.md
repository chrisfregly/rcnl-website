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

Once you have tested your changes, git push them to the `main` branch. This will kick off a continuous integration (CI) pipeline that builds and publishes the site to the `gh-pages` branch. From there, a second continuous deployment (CD) pipeline will kick-off that deploys the site to the live [rcnl.rice.edu](rcnl.rice.edu) domain.

## How To Update Pages

Most pages can be updated without the need to touch the underlying code. Specifically the `people`, `publications`, `research`, and `resources` pages each have their own [JSON data file](src/data/) and [assets folder](public/assets/) that they use to generate the content on the page.

### Example - Updating the People Page 

The `people` page is generated from information in a [people.json](src/data/people.json) file and photos from a [people](public/assets/people) folder. Here is an example of a person found in the [people.json](src/data/people.json) file:

```json
{
    "name": "B.J. Fregly",
    "role": "Lab Director",
    "titles": ["PhD"],
    "description": "Professor and CPRIT Scholar in Cancer Research",
    "website": "https://rcnl.rice.edu",
    "email": "fregly@rice.edu",
    "image": "bj_fregly.jpg"
}
```

To add, remove, or update a person's information, just modify the [people.json](src/data/people.json) file. This should automatically update the people page.

To add or change an image, just place the image in the [people](public/assets/people/) folder. If you want a person to use this new image then update that person's`"image"` field in the [people.json](src/data/people.json) file.

This same process can be followed for the other `publications`, `research`, and `resources` pages. 
