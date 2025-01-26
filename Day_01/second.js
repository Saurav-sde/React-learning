const element = React.createElement("h1",{},"Hello Coder Army");

// reactDOM.render(element,document.getElementById('root')); // depricated in react18

const root = ReactDOM.createRoot(document.getElementById('root'));
// in react Root container document.getElementById('root') it is stored, now react handle it by their own 
// in previous versions it is handle by root


/*
suppose i have 50 cards to render if a btn is clicked 

In previous version of react, if we clicked that btn and after it displays 10 cards i clicked another different btn till that time react igonres this , first they render 50cards then it run another clicked btn

in react 18 and newer version, if we clicked that btn and after it displays 10 cards i clicked another different btn react stops the rendering process and listen to another btn clicked and it runs the clicked btn
*/
root.render(element);


// Lets Discuss about cdn(content delivery network)
/*
suppose we have one server that is in USA, if i am from india i have to hit that server then it gives me the data , if there is crore users single server unable to response to our request,it takes more time to give us back the response


we have started createing mirror server(copy server) and place in different geographical location, in copy server all the data of main server is copied

suppose i created 10 copied server and then i upload a video on youtube, video goes to main server and now the task of the main server is to send this video to all the copied server
this approach also fail


now the cdn netowrk came,
They have created small-small servers(cdn) in various geographical location, Now suppose i have to see a video on youtube so this request goes to nearest cdn server, if that youtube video is present in that nearest server then it responds us back with the video, iof the video is not there then that request goes to main server, now the main server sends that video to the cdn server and cdn server send this to us, while cdn is sending this video to us , cdn also stores that video so that if next time anyone want that video and the nearest cdn is same then cdn respond us back with that video without going to main server

sometimes if the nearest cdn server is busy then our request goes to next nearest cdn server
*/


// in zomato after refreshing the page content comes earlier than photos,these photos came from cdn server 
//this is why because static data is stored in cdn server , and the data which is changing contniously () is stored in main server 

// "When a video is uploaded to YouTube, the video file (which is static content) is stored and distributed via a Content Delivery Network (CDN). This ensures fast playback for users around the globe by delivering the video from the nearest CDN server. On the other hand, dynamic content such as comments, likes, views, and other user interactions is managed by YouTube's main servers (origin servers) or a database, as these data points are constantly updated in real-time."

// If CDNs are designed to respond faster, why do images sometimes load after the textual content on platforms like Zomato?

/*
HTML Content Loads First:
    When you request a webpage, the browser first fetches the HTML document from the server.
    HTML defines the structure of the page, including placeholders for images, links to CSS stylesheets, and JavaScript files.
    The browser starts parsing the HTML immediately and prioritizes the textual content (e.g., restaurant names, descriptions, etc.).

Images Are Loaded Separately:
    While parsing the HTML, the browser identifies <img> tags and sends separate requests to the CDN to fetch the images.
    This asynchronous behavior ensures the browser can start rendering the page's structure (text and layout) before images are fully loaded.

Lazy Loading:
    Many websites (including Zomato) implement lazy loading for images to improve performance. With lazy loading, images only start loading when they are about to enter the user’s viewport (e.g., as you scroll down).

*/