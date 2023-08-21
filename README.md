In this project, let's build a **Comments App** 

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/comments-app-output-v0.gif" alt="comments output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>



### Set Up Instructions


<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`


### Completion Instructions



The app must have the following functionalities

- Initially, the list of comments should be zero and the inputs fields should be empty
- When non-empty values are provided and **Add Comment** button is clicked,
  - A new comment should be added to the list of comments
  - The comments count should be incremented by one
  - The value of the input fields for name and comment should be updated to their initial values
- When the **Like** button of a comment is clicked, if the image for **Like** is
  - [Like](https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png) image, then it should be changed to the [Liked](https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png) image
  - [Liked](https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png) image, then it should be changed to the [Like](https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png) image
- When the **Delete** button of a comment is clicked, the comment should be deleted from the list of comments and the comments count should be decremented by one




<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/comments-app-component-breakdown-structure-v0.png" alt="component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>





### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- The `formatDistanceToNow` function in the **date-fns** package is used to return the gap between the given date and now in words.

```js
import {formatDistanceToNow} from 'date-fns'

console.log(formatDistanceToNow(new Date())) // less than a minute
```

</details>

### Important Note


<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- HTML input element for name should have the placeholder as **Your Name**
- HTML textarea element for comment should have the placeholder as **Your Comment**
- The **Like** image for each comment should have the alt as **like**
- The **Delete** button for each comment should have the data-testid as **delete**
- To display how much time ago the comment was posted, we will use `formatDistanceToNow` function from **date-fns** package



### Resources


<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png) alt should be **comments**
- [https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png) alt should be **delete**
- [https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png)
- [https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png)


