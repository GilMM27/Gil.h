import { api } from "~/trpc/server";
import Navbar from "./_components/navbar";
import Image from "next/image";
import Terminal from "./_components/terminal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./_components/shadcn/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./_components/shadcn/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./_components/shadcn/dropdown-menu";
import Footer from "./_components/footer";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import MatrixEffect from "./_components/matrixEffect";
import TechShowcase from "./_components/techShowcase";

export default async function Home() {
  const experiences = await api.experience.getExperiencesByType({
    experienceType: "workExperience",
    isPrimary: true,
  });
  const competitions = await api.experience.getExperiencesByType({
    experienceType: "competition",
    isPrimary: true,
  });
  return (
    <main id="Gil.h">
      <Navbar />
      <MatrixEffect />
      <div className="flex h-screen flex-col">
        <section className="z-5 mt-30 ml-30 flex flex-1 items-center text-green-500">
          <div className="flex items-center">
            <div>
              <div className="text-3xl lg:text-5xl">Who is</div>
              <div className="text-5xl lg:text-8xl">Gilberto Malagamba?</div>
              <div className="mt-5 text-5xl text-white">
                Software engineer
                <span className="text-2xl text-gray-500"> (soon)</span>
              </div>
              <div className="mt-10 flex space-x-5">
                <a
                  href="https://www.linkedin.com/in/gilberto-malagamba-montejo-587a23305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition duration-300 ease-in-out hover:scale-110 hover:text-green-700"
                >
                  <FaLinkedin size={60} />
                </a>
                <a
                  href="https://github.com/GilMM27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition duration-300 ease-in-out hover:scale-110 hover:text-green-700"
                >
                  <FaGithub size={60} />
                </a>
              </div>
            </div>
            <Image
              src="/assets/me.png"
              alt="a cartoon of myself"
              width={300}
              height={300}
              className="ml-50 w-120"
            />
          </div>
        </section>
        <Terminal />
      </div>

      <section className="m-50 flex flex-col items-center justify-center">
        <div className="flex">
          <Image
            src="/assets/meInSuit.jpg"
            alt="Me in a suit"
            width={300}
            height={300}
            className="w-150"
          />
          <div className="flex flex-col justify-center bg-gradient-to-r from-green-950 to-black px-40 text-4xl">
            <p className="mb-10 text-green-500">Nice to meet you!</p>
            <p>
              I&apos;m a software engineer, web developer, robotics enthusiast,
              cybersecurity competitor and computer science student at
              Tecnológico de Monterrey Campus Monterrey.
            </p>
          </div>
        </div>
      </section>

      <TechShowcase />

      <section className="flex h-screen flex-col" id="Experience">
        <p className="mt-10 mr-30 text-end text-5xl text-green-500 lg:text-8xl">
          My experience
        </p>
        {experiences.length > 0 ? (
          <div className="flex flex-1 items-center">
            <Tabs
              defaultValue={experiences[0]?.id.toString()}
              className="flex h-[80vh] w-full gap-6"
            >
              <TabsList className="flex h-full w-24 flex-col justify-center gap-0 bg-transparent lg:w-32">
                {experiences.map((experience) => (
                  <TabsTrigger
                    key={experience.id}
                    value={experience.id.toString()}
                    className="group relative h-16 w-full overflow-visible rounded-none p-0 transition-all duration-300 data-[state=active]:grayscale-0 data-[state=inactive]:grayscale lg:h-20"
                  >
                    <div className="pointer-events-none absolute top-0 right-0 bottom-0 -left-20 bg-gradient-to-r from-blue-950 to-transparent opacity-0 transition-opacity duration-300 group-data-[state=active]:opacity-100 lg:-left-28" />
                    <Image
                      src={experience.imageUrl}
                      width={80}
                      height={80}
                      alt={experience.title}
                      className="relative z-10 h-full w-16 object-contain lg:w-20"
                    />
                  </TabsTrigger>
                ))}
              </TabsList>

              {experiences.map((experience) => (
                <TabsContent
                  key={experience.id}
                  value={experience.id.toString()}
                  className="mt-0 flex flex-1 items-center gap-6"
                >
                  <div className="scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-neutral-900 flex h-[70vh] flex-1 flex-col overflow-y-auto rounded-xl p-6">
                    <h2 className="text-3xl font-bold text-blue-600 lg:text-8xl">
                      {experience.title}
                    </h2>
                    <p className="mt-5 text-lg text-gray-400 lg:text-4xl">
                      {experience.header}
                    </p>
                    <div className="mt-6 flex-1 space-y-3 text-base text-white lg:text-3xl">
                      {experience.description.map((line, index) => (
                        <div key={index}>&gt; {line}</div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-col gap-2">
                      {experience.linksName.map((linkName, index) => (
                        <a
                          key={index}
                          href={experience.link[index]}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-green-400 hover:text-green-300 lg:text-3xl"
                        >
                          {linkName}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="hidden h-[70vh] w-1/3 lg:block">
                    <Image
                      src={experience.imageUrl}
                      width={1000}
                      height={1000}
                      alt={experience.title}
                      className="h-full w-full rounded-xl object-contain p-20"
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center text-white">
            Loading...
          </div>
        )}
      </section>

      <div className="h-0 lg:h-14" id="Competitions"></div>
      <div className="mt-14 w-full text-center text-3xl text-green-700 lg:text-5xl">
        Competitions
      </div>
      <section className="mx-10 mt-10 justify-center rounded-xl bg-neutral-900 lg:mx-28 lg:bg-none">
        {competitions.length > 0 ? (
          <Tabs
            defaultValue={competitions[0]?.id.toString()}
            className="flex flex-col lg:flex-row"
          >
            <TabsList className="w-full gap-3 bg-neutral-900 text-white lg:mt-6 lg:ml-6 lg:grid lg:h-fit lg:w-fit lg:grid-rows-5">
              {competitions.map((competition) => (
                <TabsTrigger
                  key={competition.id}
                  value={competition.id.toString()}
                  className="hidden w-full lg:block"
                >
                  {competition.title}
                </TabsTrigger>
              ))}
              <div className="block w-full text-center lg:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger>Options</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {competitions.map((competition) => (
                      <DropdownMenuItem key={competition.id}>
                        <TabsTrigger
                          value={competition.id.toString()}
                          className="w-full"
                        >
                          {competition.title}
                        </TabsTrigger>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsList>
            {competitions.map((competition) => (
              <TabsContent
                key={competition.id}
                value={competition.id.toString()}
              >
                <Card className="flex flex-col border-0 bg-neutral-900 text-lg text-white md:grid md:h-[25rem] md:grid-cols-3">
                  <div className="scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-neutral-900 md:col-span-2 md:overflow-y-auto">
                    <CardHeader>
                      <CardTitle className="text-3xl">
                        {competition.title}
                      </CardTitle>
                      <CardDescription className="text-xl">
                        {competition.header}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-5 space-y-2">
                      {competition.description.map((line, index) => (
                        <div key={index}>&gt; {line}</div>
                      ))}
                    </CardContent>
                    <CardFooter>
                      {competition.linksName.map((linkName, index) => (
                        <a
                          key={index}
                          href={competition.link[index]}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-green-400"
                        >
                          {linkName}
                        </a>
                      ))}
                    </CardFooter>
                  </div>
                  <Image
                    src={competition.imageUrl}
                    height={1000}
                    width={1000}
                    alt="Image from the competition"
                    className="mb-10 max-h-3/4 w-[90%] self-center rounded-xl object-cover md:col-span-1 md:mb-0 md:justify-self-center"
                  />
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="w-full p-5 text-center">Loading...</div>
        )}
      </section>

      <Footer />
    </main>
  );
}
