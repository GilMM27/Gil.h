'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from './navbar';
import Terminal from './terminal';
import Carousels from './carousels';
import Footer from './footer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { db } from '@/lib/firebase';
import { useEffect, useState } from 'react';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore';
import { Spinner } from '@nextui-org/react';

const Landing: React.FC = () => {
  const [competencias, setCompetencias] = useState<Competencia[]>([]);
  const [experiencias, setExperiencias] = useState<Experience[]>([]);
  const [info, setInfo] = useState<infoType | null>(null);

  type infoType = {
    picture: string;
  };

  type Competencia = {
    footer: string;
    header: string;
    id: string;
    title: string;
    description: string[];
    date: Timestamp;
    image: string;
    color: string;
  };

  type Experience = {
    footer: string;
    header: string;
    id: string;
    title: string;
    description: string[];
    date: Timestamp;
    image: string;
    isMain: boolean;
    links: Record<string, string>;
  };

  useEffect(() => {
    const fetchCompetencias = async () => {
      const competenciasCollection = collection(db, 'competencias');
      const competenciasQuery = query(
        competenciasCollection,
        orderBy('date', 'desc'),
      );
      const competenciasSnapshot = await getDocs(competenciasQuery);
      const competenciasList = competenciasSnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Competencia),
      );
      setCompetencias(competenciasList);
    };

    const fetchExperiencias = async () => {
      const experienciasCollection = collection(db, 'experiencias');
      const experienciasQuery = query(
        experienciasCollection,
        orderBy('date', 'desc'),
      );
      const experienciasSnapshot = await getDocs(experienciasQuery);
      const experienciasList = experienciasSnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Experience),
      );
      setExperiencias(experienciasList);
    };

    const fetchImage = async () => {
      const sobremiRef = doc(db, 'sobremi', 'information');
      const sobremiSnap = await getDoc(sobremiRef);
      setInfo(sobremiSnap.data() as infoType);
    };

    fetchCompetencias();
    fetchExperiencias();
    fetchImage();
  }, []);

  return (
    <main id="Gil.h">
      <Navbar />
      <div className="flex bg-gradient-to-l from-green-950 to-black m-10">
        <section className="relative w-96 h-96 overflow-hidden hidden lg:block">
          {info && info.picture ? (
            <Image
              src={info.picture}
              width={918}
              height={1032}
              alt="Image"
              className="absolute w-full h-full object-cover"
            />
          ) : (
            <Spinner size="md" color="white" className="absolute inset-0" />
          )}
        </section>
        <section className="lg:ml-10 text-green-700 flex items-center">
          <div>
            <div className="text-3xl lg:text-5xl">Who is:</div>
            <div className="text-5xl lg:text-9xl">Gilberto Malagamba?</div>
          </div>
        </section>
      </div>

      <Terminal />

      <Card className="text-white mt-14 lg:mt-28 bg-neutral-900 p-3 mx-10 lg:mx-28 rounded-xl border-0">
        <CardHeader className="text-green-400 text-2xl lg:text-3xl">
          Hi! just a little introduction about me, feel free to skip.
        </CardHeader>
        <CardContent className="text-lg lg:text-xl">
          &gt; I&apos;m a software engineer, a web developer, and a computer
          science student at Tecnológico de Monterrey Campus Monterrey.
          <br />
          &gt; Been coding since 2020, as every other programmer, my first
          interest was in how video games were made.
          <br />
          &gt; From then I moved onto competitive programming, baby steps.
          <br />
          &gt; I&apos;m currently competing in robotics, freelance web
          development, and working on personal projects.
          <br />
        </CardContent>
      </Card>

      <Carousels></Carousels>

      <div className="h-0 lg:h-14" id="Experience"></div>
      <div className="w-full text-center mt-14 text-3xl lg:text-5xl text-green-700">
        Experience
      </div>
      {experiencias && experiencias.length > 0 ? (
        <section className="justify-center mx-10 lg:mx-28 mt-10">
          <Tabs defaultValue={experiencias[0].title}>
            <TabsList className="w-full bg-neutral-900 text-white">
              <div className="hidden lg:flex w-full lg:justify-evenly">
                {experiencias.map(
                  (experiencia) =>
                    experiencia.isMain && (
                      <TabsTrigger
                        key={experiencia.id}
                        value={experiencia.id}
                        className="w-full"
                      >
                        {experiencia.title}
                      </TabsTrigger>
                    ),
                )}
              </div>
              <div className="lg:hidden block">
                <DropdownMenu>
                  <DropdownMenuTrigger>Options</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {experiencias.map(
                      (experiencia) =>
                        experiencia.isMain && (
                          <DropdownMenuItem key={experiencia.id}>
                            <TabsTrigger
                              value={experiencia.id}
                              className="w-full"
                            >
                              {experiencia.title}
                            </TabsTrigger>
                          </DropdownMenuItem>
                        ),
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsList>
            {experiencias.map(
              (experiencia) =>
                experiencia.isMain && (
                  <TabsContent key={experiencia.id} value={experiencia.id}>
                    <Card className="border-0 text-white text-lg bg-neutral-900 md:grid md:grid-cols-3 md:h-[25rem] flex flex-col">
                      <Image
                        src={experiencia.image}
                        width={918}
                        height={1032}
                        alt={experiencia.title}
                        className="md:col-span-1 object-cover mb-10 md:mb-0 self-center md:justify-self-center rounded-xl w-[90%]"
                      />
                      <div className="md:col-span-2 md:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-neutral-900">
                        <CardHeader>
                          <CardTitle className="text-3xl">
                            {experiencia.title}
                          </CardTitle>
                          <CardDescription className="text-xl">
                            {experiencia.header}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {Array.isArray(experiencia.description) &&
                            experiencia.description.map((desc, index) => (
                              <div key={index}>&gt; {desc}</div>
                            ))}
                        </CardContent>
                        <CardFooter>
                          <div>
                            {experiencia.footer}
                            <span> </span>
                            {experiencia.links &&
                              Object.entries(experiencia.links).map(
                                ([key, value]) => (
                                  <div key={key}>
                                    <Link
                                      href={value}
                                      className="text-green-400"
                                    >
                                      {key}
                                    </Link>
                                  </div>
                                ),
                              )}
                          </div>
                        </CardFooter>
                      </div>
                    </Card>
                  </TabsContent>
                ),
            )}
          </Tabs>
        </section>
      ) : (
        <div className="p-5 w-full text-center">Loading...</div>
      )}

      <div className="h-0 lg:h-14" id="Competitions"></div>
      <div className="w-full text-center mt-14 text-3xl lg:text-5xl text-green-700">
        Competitions
      </div>
      <section className="justify-center mx-10 lg:mx-28 mt-10 lg:bg-neutral-900 rounded-xl">
        {competencias && competencias.length > 0 ? (
          <Tabs defaultValue={competencias[0].id} className="lg:flex">
            <TabsList className="lg:grid lg:grid-rows-5 lg:h-fit text-white bg-neutral-900 gap-3 lg:ml-6 lg:mt-6 w-full lg:w-fit">
              {competencias.map((competencia) => (
                <TabsTrigger
                  key={competencia.id}
                  value={competencia.id}
                  className={`hidden lg:block text-${competencia.color}`}
                >
                  {competencia.title}
                </TabsTrigger>
              ))}
              <div className="lg:hidden block w-full text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>Options</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {competencias.map((competencia) => (
                      <DropdownMenuItem key={competencia.id}>
                        <TabsTrigger value={competencia.id} className="w-full">
                          {competencia.title}
                        </TabsTrigger>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsList>
            {competencias.map((competencia) => (
              <TabsContent key={competencia.id} value={competencia.id}>
                <Card className="border-0 text-white text-lg bg-neutral-900 md:grid md:grid-cols-3 md:h-[25rem] flex flex-col">
                  <div className="md:col-span-2 md:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-neutral-900">
                    <CardHeader>
                      <CardTitle className="text-3xl">
                        {competencia.title}
                      </CardTitle>
                      <CardDescription className="text-xl">
                        {competencia.header}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {Array.isArray(competencia.description) &&
                        competencia.description.map((desc, index) => (
                          <div key={index}>&gt; {desc}</div>
                        ))}
                    </CardContent>
                    <CardFooter>{competencia.footer}</CardFooter>
                  </div>
                  <Image
                    src={competencia.image}
                    height={1000}
                    width={1000}
                    alt="Image from the competition"
                    className="md:col-span-1 object-cover mb-10 md:mb-0 self-center md:justify-self-center rounded-xl w-[90%]"
                  />
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="p-5 w-full text-center">Loading...</div>
        )}
      </section>

      <Footer></Footer>
    </main>
  );
};

export default Landing;
