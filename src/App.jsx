import Testimony from "./testimony";
import "./App.css";
export default function App() {
  return (
    <div className="app">
      <Testimony
        placement={"bg-1"}
        color="purple"
        profilePic="/images/image-daniel.jpg"
        name="Daniel Clifford"
        role="Verified Graduate"
        title="I received a job offer mid-course, and the subjects I learned were current, if not more so, than those offered in the market."
        text="I was an EMT for many years before I joined the bootcamp. I've been looking for a job that would allow me to get back to living my life to the fullest, and I found one that I can do from home. Thanks to this program, I was able to build a portfolio of projects and get a job at a startup. I couldn't be happier!"
      />
      <Testimony
        placement={"bg-2"}
        color="gray"
        profilePic="/images/image-jonathan.jpg"
        name="Jonathan Walters"
        role="Verified Graduate"
        title="The team was very supportive and kept me motivated"
        text="I started as a total newbie with no experience in coding. I had a lot of doubts and fears, but the team was very supportive and kept me motivated. I learned so much in such a short time, and I am now working as a software engineer at a great company. I couldn't have done it without the help of my mentors and the community."
      />
      <Testimony
        placement={"bg-3"}
        color="black"
        profilePic="/images/image-jeanette.jpg"
        name="Jeanette Harmon"
        role="Verified Graduate"
        title="An overall wonderful and fulfilling experience"
        text="I had a great experience at the bootcamp. The instructors were knowledgeable and always willing to help. I learned a lot and made some great friends along the way. I am now working as a software engineer and couldn't be happier with my career choice."
      />
      <Testimony
        placement={"bg-4"}
        color="white"
        profilePic="/images/image-patrick.jpg"
        name="Patrick Abrams"
        role="Verified Graduate"
        title="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
        text="I had a great experience at the bootcamp. The instructors were knowledgeable and always willing to help. I learned a lot and made some great friends along the way. I am now working as a software engineer and couldn't be happier with my career choice."
      />
      <Testimony
        placement={"bg-5"}
        color="black"
        profilePic="/images/image-kira.jpg"
        name="Kira Whittle"
        role="Verified Graduate"
        title="I can't believe how much I learned in such a short time. I feel like I can take on the world now."
        text="I had a great experience at the bootcamp. The instructors were knowledgeable and always willing to help. I learned a lot and made some great friends along the way. I am now working as a software engineer
         and couldn't be happier with my career choice. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur finibus massa, quis viverra lectus commodo quis. Integer maximus cursus arcu, quis maximus augue cursus et. Nulla facilisi. Pellentesque urna est, sodales sed purus id, sollicitudin eleifend diam. Nam posuere eros eget tellus egestas faucibus. Morbi a augue ultrices, volutpat
          magna tempus, convallis massa. Nulla sed pellentesque quam. Mauris auctor, risus vel sagittis hendrerit, felis magna pharetra lacus, sit amet rhoncus massa turpis vitae tellus. Proin vitae erat nibh."
      />
    </div>
  );
}
