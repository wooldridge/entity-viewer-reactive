# Entity Viewer Reactive

Goals:

- Experiment with the ReactiveSearch framework for building search UIs on Elasticsearch and other database platforms
- Test customizing the frontend components, including integrating existing Entity Viewer widgets into the ReactiveSearch frontend framework
- Explore connecting MarkLogic as an underlying data source (instead of Elasticsearch)

# Setup

1. Create an instance of Elasticsearch that will support the application. This can be done in various ways, e.g. a. via ReactiveSearch's hosted product (https://www.reactivesearch.io/) or b. via Elasticsearch's products directly (https://www.elastic.co/downloads/).

2. Load the application data into your Elasticsearch instance.

3. Install the Entity Viewer Reactive project and configure it to connect to your Elasticsearch instance. This includes configuring the ReactiveBase wrapper component in React to point at your Elasticsearch instance.

4. Run the Entity Viewer Reactive application. The application is based on the Create React App framework (start it with "npm start") and is accessed by default here: http://localhost:3000

<img width="1314" alt="reactivesearch-app" src="https://user-images.githubusercontent.com/477757/190444937-8613b245-757c-478f-b5d7-8ec2e705752f.png">
