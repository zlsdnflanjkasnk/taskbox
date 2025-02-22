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

#Builds your Storybook application using the build-storybook script from your package.json file.
RUN yarn build-storybook

# Expose the port your app will run on (change to your app's port)
EXPOSE 8083

# Command to run your app (adjust if needed)
CMD ["yarn", "storybook", "--port", "8083"]

# resolve the problem that storybook tries to use a linux function
ENV CI=true
