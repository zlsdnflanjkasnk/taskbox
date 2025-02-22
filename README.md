# Assignment 12

# Set up React Storybook
# Clone the template
npx degit chromaui/intro-storybook-react-template taskbox <br>

cd taskbox

# Install dependencies
yarn

# create components
create component folder <br>
write .tsx files to create components <br>
write .stories.tsx files to create the content and behaviors of the components <br>
write .css files to create the styles of the components <br>

# write dockerfile
# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /bao_yuwei_ui_garden

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install the project dependencies
RUN yarn install

# Copy the rest of the project files into the container
COPY . /bao_yuwei_ui_garden

# Builds Storybook application using the build-storybook script from package.json file.
RUN yarn build-storybook

# Expose the port 8083 that the app will run
EXPOSE 8083

# Command to run the app on port 8083
CMD ["yarn", "storybook", "--port", "8083"]

# build image
build image with errors

# resolve yarn compatibility problem
change the yarn version of packagemanager in package.json to 1.22.22 to match the global version

# resolve the problem that storybook tries to use a linux function which is not compatible with windows browsers
ENV CI=true

# re-build image
re-build image of the project

# build container
build container with name: bao_yuwei_coding_assignment12 on port 8083

# run container
container runs successfully on port 8083







