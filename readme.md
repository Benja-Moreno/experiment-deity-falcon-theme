# Deity Client - Creating a slideout menu

## Overview
In this tutorial will be creating a slide out menu for [Deity Falcon](https://falcon-ui.docs.deity.io/).

We will learn:

- Basic worflow & setup
- Component Styling
- Adding to & interacting with the global state (Apollo) using GraphQl.

## Getting Started
First things first we need to setup Deity Falcon locally.

### Step 1
Check you have node and yarn running at the correct versions [More Details Here](https://falcon.deity.io/docs/getting-started/requirements).

Open your terminal and run `node -v` and `yarn -v` to check you have them installed and have the correct version.

### Step 2
We are going to use [Create Falcon App](https://falcon.deity.io/docs/getting-started/installation) to get started.

Open your terminal and move the directory you want to install your site e.g `cd /Users/[YOUR USER]/web/`

Now run the command `npx create-falcon-app my-app` where `my-app` is the directory the project will be created.

n.b. If you want to install a different version of falcon use `@[VERSION]` e.g  `npx create-falcon-app@beta my-app`.

### Step 3
Now you should have your site installed cd into your project `cd /Users/[YOUR USER]/web/my-app`. From here you will have 2 main directories `client` and `server`.

Let's get them both started. In 2 seperate terminal windows `cd` into each and run `yarn start`. 

Once they are both up and running you should be give a message with the location they are running. `client` normally starts at `http://localhost:3000/`.

### Step 4
If you visit the client URL e.g. `http://localhost:3000/` you should now see your site running. 

Now we need to set up your local workflow.

First things first, let's ignore the files we don\'t want to be commited.

- cd into your client directory. `/Users/[YOUR USER]/web/my-app/client`.
- Initiate git. `git init`. If you don't have git running on your machine you can follow [this](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) tutorial.
- We now need to create a .gitignore. `nano .gitignore`.
- To start with add the following paths to your gitignore `node_modules`, `build`.
- The final gitignore file should look like [this](https://github.com/hobadams/experiment-deity-falcon-theme/blob/master/.gitignore)

If you're using VScode as your code editor I recommend creating a workspace and adding the following direcotries to it `./node_modules/@deity/falcon-ui` & `./node_modules/@deity/falcon-ui-kit`. You can always steal [mine](https://github.com/hobadams/experiment-deity-falcon-theme/blob/master/falcon-client.code-workspace)

## Styling

### 