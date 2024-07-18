import * as React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "./navbar";
import Terminal from "./terminal";
import Carousels from './carousels';
import Footer from './footer';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"

const Landing: React.FC = () => {
    const experience = ['/assets/experience/smiley.jpeg', '/assets/experience/pdei.png', '/assets/experience/roborregos.png', '/assets/experience/ftc.png', '/assets/experience/omi.png'];
    return (
      <main id='title'>
        <Navbar/>

        <div className="flex bg-gradient-to-l from-green-950 to-black m-10">
          <section className="relative w-96 h-96 overflow-hidden hidden lg:block">
            <Image src='/assets/yo.jpg' width={918} height={1032} alt="Image" className="absolute w-full h-full object-cover"/>
          </section>
          <section className="lg:ml-10 text-green-700 flex items-center">
            <div>
              <div className="text-3xl lg:text-5xl">Who is:</div>
              <div className="text-5xl lg:text-9xl">Gilberto Malagamba?</div>
            </div>
          </section>
        </div>

        <Terminal></Terminal>

        <Card className="text-white mt-14 lg:mt-28 bg-neutral-900 p-3 mx-10 lg:mx-28 rounded-xl border-0">
          <CardHeader className="text-green-400 text-2xl lg:text-3xl">Hi! just a little introduction about me, feel free to skip.</CardHeader>
          <CardContent className='text-lg lg:text-xl'>
            &gt; I&apos;m a software engineer, a web developer, and a computer science student at Tecnológico de Monterrey Campus Monterrey.<br/>
            &gt; Been coding since 2020, as every other programmer, my first interest was in how video games were made.<br/>
            &gt; From then I moved onto competitive programming, baby steps.<br/>
            &gt; I&apos;m currently competing in robotics, freelance web development, and working on personal projects.<br/>
          </CardContent>
        </Card>

        <div className='hidden lg:block'><Carousels></Carousels></div>

        <div className='h-0 lg:h-14' id='experience'></div>
        <div className='w-full text-center mt-14 text-5xl text-green-700'>Experience</div>
        <section className='justify-center mx-10 lg:mx-28 mt-10'>
          <Tabs defaultValue="Smiley">
            <TabsList className="w-full bg-neutral-900 text-white">
              <div className='hidden lg:grid w-full lg:grid-cols-5'>
              <TabsTrigger value="Smiley">Smiley</TabsTrigger>
              <TabsTrigger value="PDEI">PDEI united</TabsTrigger>
              <TabsTrigger value="RoBorregos">RoBorregos</TabsTrigger>
              <TabsTrigger value="FTC">FTC</TabsTrigger>
              <TabsTrigger value="OMI">OMI</TabsTrigger>
              </div>
              <div className='lg:hidden block'>
                <DropdownMenu>
                  <DropdownMenuTrigger>Options</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem><TabsTrigger value="Smiley" className='w-full'>Smiley</TabsTrigger></DropdownMenuItem>
                    <DropdownMenuItem><TabsTrigger value="PDEI" className='w-full'>PDEI united</TabsTrigger></DropdownMenuItem>
                    <DropdownMenuItem><TabsTrigger value="RoBorregos" className='w-full'>RoBorregos</TabsTrigger></DropdownMenuItem>
                    <DropdownMenuItem><TabsTrigger value="FTC" className='w-full'>FTC</TabsTrigger></DropdownMenuItem>
                    <DropdownMenuItem><TabsTrigger value="OMI" className='w-full'>OMI</TabsTrigger></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsList>

            <TabsContent value="Smiley">
              <Card className='bg-neutral-900 border-0 text-white text-lg flex flex-col lg:flex-row items-center'>
                <div className='lg:w-3/4 lg:pr-10'>
                  <CardHeader>
                    <CardTitle className='text-3xl'>Smiley</CardTitle>
                    <CardDescription className='text-xl'>
                      Developed a web page for a local business in Monterrey called Smiley.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    &gt; The <Link href={'https://smiley-web-app.web.app'} className='text-green-400'>page</Link> was developed using the Angular framework and Firebase for the backend.<br/>
                    &gt; It handles user authentication, a shopping cart, and a database for the tickets.<br/>
                    &gt; The page is currently being used by the business and has been a great success. We have registered 1271 user accounts.<br/>
                  </CardContent>
                  <CardFooter>
                    This page was my first freelance project and it was a great learning experience.
                  </CardFooter>
                </div>
                <Image src={experience[0]} width={918} height={1032} alt="Smiley" className="w-3/4 lg:h-3/4 lg:w-1/4 object-cover mb-10 lg:mb-0 lg:mr-10 rounded-xl"/>
              </Card>
            </TabsContent>
            <TabsContent value="PDEI">
              <Card className='bg-neutral-900 border-0 text-white text-lg flex flex-col lg:flex-row items-center'>
                <div className='lg:w-3/4 lg:pr-10'>
                  <CardHeader>
                    <CardTitle className='text-3xl'>PDEI united</CardTitle>
                    <CardDescription className='text-xl'>
                      Developed a web page for a business called PDEI united.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    &gt; Currently developing using Next.js and Firebase for the backend.<br/>
                    &gt; Designed the user interface using Figma.<br/>
                  </CardContent>
                  <CardFooter>
                    Work in progress.
                  </CardFooter>
                </div>
                <Image src={experience[1]} width={918} height={1032} alt="PDEI united" className="w-3/4 lg:h-3/4 lg:w-1/4 object-cover mb-10 lg:mb-0 lg:mr-10 rounded-xl"/>
              </Card>
            </TabsContent>
            <TabsContent value="RoBorregos">
              <Card className='bg-neutral-900 border-0 text-white text-lg flex flex-col lg:flex-row items-center'>
                <div className='lg:w-3/4 lg:pr-10'>
                  <CardHeader>
                    <CardTitle className='text-3xl'>RoBorregos</CardTitle>
                    <CardDescription className='text-xl'>
                      I&apos;m currently competing in robotics with the representative team of Tecnológico de Monterrey Campus Monterrey.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    &gt; Competed in the 2024 Mexican Robotics Tournament (TMR) and placed 2nd in the Junior Rescue Maze category. I designed and programmed the <Link href={'https://github.com/RoBorregos/RescueMaze2024/tree/nacionalNewMovement'} className='text-green-400'>maze exploring algorithm</Link> in both C++ and arduino based on the Depth First Search and Dijkstra&apos;s shortest path algorithms. I also worked on the movement and vision integrations which included serial communication with a Jetson Nano and several PID controls.<br/>
                    &gt; Worked on an IOT project for the lockers in the RoBorrego&apos;s lab consisting of a websocket used to communicate with ESP32 microcontrollers and a web app for the user interface using the T3 tech stack.<br/>
                    &gt; Started working on the RoboCup @home Human Robot Interaction and manipulation teams. I&apos;m currently learning ROS and Gazebo.
                  </CardContent>
                  <CardFooter>
                    This team has been a great experience and has taught me a lot about teamwork, project management, and robotics.
                  </CardFooter>
                </div>
                <Image src={experience[2]} width={918} height={1032} alt="RoBorregos" className="w-3/4 lg:h-3/4 lg:w-1/4 object-cover mb-10 lg:mb-0 lg:mr-10 rounded-xl"/>
              </Card>
            </TabsContent>
            <TabsContent value="FTC">
              <Card className='bg-neutral-900 border-0 text-white text-lg flex flex-col lg:flex-row items-center'>
                <div className='lg:w-3/4 lg:pr-10'>
                  <CardHeader>
                    <CardTitle className='text-3xl'>FTC</CardTitle>
                    <CardDescription className='text-xl'>
                      Competed in the FIRST Tech Challenge as leader of the team Zorrobots #9164 of the CETYS Universidad Campus Internacional Ensenada during the 2022-2023 season.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    &gt; Reached the semifinals in the Mexico City national tournament and advanced to the regional stage in San Diego.<br/>
                    &gt; Coded both the autonomous and teleop programs for the robot in Java using the FTC SDK and Android Studio. Used encoders along side the Roadrunner library for odometry and path following. Implemented april tag detection and processing.<br/>
                    &gt; Functioned as coach player during the matches and as the team&apos;s spokesperson during the interviews.<br/>
                    &gt; Helped with the design and construction of the robot.<br/>
                    &gt; Wrote, composed and filmed a song which won us the Promote Award in the San Diego Regional.<br/>
                  </CardContent>
                  <CardFooter>
                    I really enjoyed my time competing with this team and adquired a lot of skills which would help me in the future.
                  </CardFooter>
                </div>
                <Image src={experience[3]} width={918} height={1032} alt="FTC" className="w-3/4 lg:h-3/4 lg:w-1/4 object-cover mb-10 lg:mb-0 lg:mr-10 rounded-xl0"/>
              </Card>
            </TabsContent>
            <TabsContent value="OMI">
              <Card className='bg-neutral-900 border-0 text-white text-lg flex flex-col lg:flex-row items-center'>
                <div className='lg:w-3/4 lg:pr-10'>
                  <CardHeader>
                    <CardTitle className='text-3xl'>OMI</CardTitle>
                    <CardDescription className='text-xl'>
                      Competed in the Mexican Informatics Olympiad during the 2020-2021 and 2021-2022 seasons, reaching the national stage in both.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    &gt; Placed 36th in the 2021 national stage (bronze medal) and 16th in the 2022 national stage (silver medal).<br/>
                    &gt; Learned about algorithms and data structures, and how to implement them in C++.<br/>
                    &gt; Took the training and solved a lot of <Link href={'https://github.com/GilMM27/OMI'} className='text-green-400'>homeworks and OmegaUp</Link> problems. <br/>
                    &gt; Both years I participated the traning for the international team selection.<br/>
                    &gt; Started a competitive programming club in my school and taught the basics of C++ and algorithms to the members.
                  </CardContent>
                  <CardFooter>
                    This competition sparked my interest in competitive programming and taught me a lot about algorithms and data structures.
                  </CardFooter>
                </div>
                <Image src={experience[4]} width={918} height={1032} alt="OMI" className="w-3/4 lg:h-3/4 lg:w-1/4 object-cover mb-10 lg:mb-0 lg:mr-10 rounded-xl"/>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <div className='h-0 lg:h-14' id='hackathons'></div>
        <div className='w-full text-center mt-14 text-5xl text-green-700'>Hackathons</div>
        <section className='justify-center mx-10 lg:mx-28 mt-10 lg:bg-neutral-900 rounded-xl'>
          <Tabs defaultValue="yuHacks" className='lg:flex'>
            <TabsList className="lg:grid lg:grid-rows-5 lg:h-fit text-white bg-neutral-900 gap-3 lg:ml-6 lg:mt-6 w-full lg:w-fit">
              {/* <div className=''> */}
                <TabsTrigger value="yuHacks" className='w-52 hidden lg:block'>yuHacks</TabsTrigger>
                <TabsTrigger value="CODICON" className='hidden lg:block'>CODICON</TabsTrigger>
                <TabsTrigger value="Lincehacks" className='hidden lg:block'>Lincehacks</TabsTrigger>
                <TabsTrigger value="Rocket" className='hidden lg:block'>Rocket</TabsTrigger>
              {/* </div> */}
              <div className='lg:hidden block w-full text-center'>
                <DropdownMenu>
                  <DropdownMenuTrigger>Options</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem><TabsTrigger value="yuHacks" className='w-full'>yuHacks</TabsTrigger></DropdownMenuItem>
                    <DropdownMenuItem><TabsTrigger value="CODICON" className='w-full'>CODICON</TabsTrigger></DropdownMenuItem>
                    <DropdownMenuItem><TabsTrigger value="Lincehacks" className='w-full'>Lincehacks</TabsTrigger></DropdownMenuItem>
                    <DropdownMenuItem><TabsTrigger value="Rocket" className='w-full'>Rocket</TabsTrigger></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsList>
            <TabsContent value="yuHacks">
              <Card className='border-0 text-white text-lg bg-neutral-900'>
                <CardHeader>
                  <CardTitle className='text-3xl'>yuHacks (2021)</CardTitle>
                  <CardDescription className='text-xl'>
                    36 hour hackathon organized by the York University in Toronto, Canada.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  &gt; Developed a web project called <Link href={'https://devpost.com/software/speed-stocks'} className='text-green-400'>Speed Stocks</Link>, a game that simulates common trends in the stock market in a fun and enjoyable way.<br/>
                  &gt; I worked on the stock&apos;s price line generation and display using javascript<br/>
                </CardContent>
                <CardFooter>
                  This was my first time using javascript and working on a larger scale web project and I learned a lot during this hackathon.
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="CODICON">
              <Card className='border-0 text-white text-lg bg-neutral-900'>
                <CardHeader>
                  <CardTitle className='text-3xl'>CODICON (2024)</CardTitle>
                  <CardDescription className='text-xl'>
                    Won 3rd place in the 48-hour hackathon organized by Lexpin.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  &gt; Me and my team of 4 members developed game called <Link href={'https://github.com/GilMM27/ShiftHappens'} className='text-green-400'>Shift Happens</Link> in python that simulated a car&apos;s manual transmition using pygame.<br/>
                  &gt; The code generates random math functions to draw the road.<br/>
                  &gt; The player is responsable for shifting the gears on the right time to keep the car running.<br/>
                </CardContent>
                <CardFooter>
                  I learned about game development and how to use pygame during this hackathon.
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="Lincehacks">
              <Card className='border-0 text-white text-lg bg-neutral-900'>
                <CardHeader>
                  <CardTitle className='text-3xl'>Lincehacks (2024)</CardTitle>
                  <CardDescription className='text-xl'>
                    Participated in MLH&apos;s Lincehacks 36-hour hackathon.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  &gt; Demoed a flutter mobile app called <Link href={'https://github.com/A00838521/ForaneoApp'} className='text-green-400'>Foraneo App</Link> that helps students find the best sevices, restaurants, build their comunity and get tips from other students near their campus.<br/>
                  &gt; I worked on implementing the backend using firebase and the user interface using flutter.<br/>
                  &gt; I also added the geolocation feature using a flutter package to only show the user information published nearby.<br/>
                </CardContent>
                <CardFooter>
                  I practiced my flutter skills and learned how to use firebase with it.
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="Rocket">
              <Card className='border-0 text-white text-lg bg-neutral-900'>
                <CardHeader>
                  <CardTitle className='text-3xl'>Rocket (2024)</CardTitle>
                  <CardDescription className='text-xl'>
                    Participated in the challenge #3 of the 48-hour Rocket Hackathon organized by Digital Hub in Monterrey, sponsored by Arca Continental.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  &gt; Developed a prediction model for the churn of customers of the company using python and databases provided by the company.<br/>
                  &gt; Took talks on how to present a pitch and learned about the business model of Arca Continental.<br/>
                </CardContent>
                <CardFooter>
                  Learned a lot about data science and how to use python for data analysis during this hackathon.
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Footer></Footer>
      </main>
    );
};

export default Landing;