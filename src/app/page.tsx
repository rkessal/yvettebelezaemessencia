import { Metadata } from "next";

import { PrismicImage, PrismicRichText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import './globals.css'

import { createClient } from "@/prismicio";
import Hero from "@/slices/Hero";
import Link from "next/link";
import Welcome from "@/slices/Welcome";
import Categories from "./components/Categories";
import Section from "@/slices/Section";
import SobreNos from "@/slices/SobreNos";
import Perguntas from "@/slices/Perguntas";
import ContactForm from "./components/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  const client = createClient();
  const home = await client.getSingle("home", {
    fetchLinks: [
      'service_category.uid',
      'service_category.title',
      'service_category.description',
      'service_category.image',
      'service_category.slices',
    ]  });
  const navigation = await client.getSingle('navigation')
  const footer = await client.getSingle('footer')

  return (
    <div className="md:text-[1rem] text-[1.75rem]">
    <nav className="absolute top-0 left-0 z-10 flex justify-center w-full mx-auto mt-10">
      <ul className="flex flex-row">
      {
        navigation.data.slices.map(slice => (
          <li key={slice.id} className="text-white mx-[2rem]">
            {
              slice.primary.url && 
                <Link href={slice.primary.url}>
                  {slice.primary.label}
                </Link>
            }
          </li>
        ))
      }
      </ul>
    </nav>
      {
        home.data.slices.map((slice, index) => (
          <>
          {
            slice.slice_type === 'hero' && 
              <Hero index={index} slices={slice.items} key={1} context={{}} slice={slice} />
          }
          {
            slice.slice_type === 'welcome' &&
              <Welcome index={index} slices={slice.items} key={slice.id} context={{}} slice={slice} />
          }
          </>
        ))
      }
      <div id="services" className="mx-[3rem] mt-[6rem] flex flex-col md:flex-row">
          <Categories categories={home.data.categories}/>
      </div>

      {
        home.data.slices.map((slice, index) => (
          <>
            {
              slice.slice_type === 'section' &&
                <Section slice={slice} slices={home.data.slices} context={{2: 'about-us'}} index={index} key={slice.id} />
            }
            {
              slice.slice_type === 'sobre_nos' &&
                <SobreNos slice={slice} slices={home.data.slices} context={{}} index={index} key={slice.id} />
            }
            {
              slice.slice_type === 'perguntas' &&
                <Perguntas slice={slice} slices={home.data.slices} context={{}} index={index} key={slice.id} />
            }
          </>
        ))
      }
      <footer id="contact" className="bg-dark text-beige w-full py-[4rem] px-[3rem]">
        <div className="flex flex-col md:flex-row text-beige">
          <figure className="hidden md:block w-[40.3125rem] h-[42.4375rem] overflow-hidden">
            <PrismicImage field={footer.data.image} className="object-cover w-full h-full" />
          </figure>
          <div className="md:ml-[2rem]">
            <h1 className="mb-[2rem] mt-[2rem] uppercase md:text-[1rem] tracking-[0.5rem]">Contato</h1>
            <div className="md:text-[1.125rem]">
              <div className="mb-[1rem]">
                <PrismicRichText field={footer.data.address} />
              </div>
              <div className="mb-[6rem]">
                <PrismicRichText field={footer.data.number} />
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
        <figure className=" mt-[16rem] mb-[4rem] mx-auto max-w-[12.1875rem] w-full">
          <PrismicImage className="object-cover w-full h-full" field={footer.data.logo} />
        </figure>
        <ul className=" mb-[4rem] flex flex-row items-center justify-center">
        {
          navigation.data.slices.map(slice => (
            <li key={slice.id} className="text-white mx-[1rem]">
            {
              slice.primary.url && 
                <Link href={slice.primary.url}>
                  {slice.primary.label}
                </Link>
            }
            </li>
          ))
        }
        </ul>
        <div className="text-center opacity-70">
          <Link className="" href='/privacidade'>Política de privacidade</Link>
          <div className="mb-[4rem]">
            <PrismicRichText field={footer.data.copyrights} />
          </div>
          <p className="text-[0.8rem] italic">Design & Developed by <Link href='https://errka.dev' target="_blank">errka</Link></p>
        </div>
      </footer>
    </div>
  ) ;
}