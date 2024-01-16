import { ReactNode } from "react";
import ContainerGrid from "../ContainerGrid";
import TitleSection from "../TitleSection";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/../src/components/ui/Accordion"

interface DataFormat{
   question: string,
   response: string
}

const questions: DataFormat[] = [
   {
      question: 'O que são NFTs?',
      response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed commodo metus, id mattis dolor. Donec luctus mauris sit amet lacus placerat condimentum.',
   },
   {
      question: 'Como funciona a compra de NFTs em seu site?',
      response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed commodo metus, id mattis dolor. Donec luctus mauris sit amet lacus placerat condimentum.',
   },
   {
      question: 'Como posso vender meus próprios NFTs?',
      response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed commodo metus, id mattis dolor. Donec luctus mauris sit amet lacus placerat condimentum.',
   }, {
      question: 'Os NFTs são seguros e autênticos?',
      response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed commodo metus, id mattis dolor. Donec luctus mauris sit amet lacus placerat condimentum.',
   }, {
      question: 'Quais são as taxas envolvidas na compra e venda de NFTs em seu site?',
      response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed commodo metus, id mattis dolor. Donec luctus mauris sit amet lacus placerat condimentum.',
   },
]

function SectionQuestions() {
   return (
      <section className="pt-20 @desktop:pt-28">
         <ContainerGrid>
            <TitleSection
               subtitle="Desvendando os Mistérios dos NFTs"
               title="Perguntas frequentes"
            />
            <div>
               <Accordion type="single" collapsible className="w-full">
                  {
                     questions.map(({ question, response }: DataFormat, index: number): ReactNode => {
                        return (
                           <AccordionItem key={`Accordion-${index}`} value={`Question-${index}`}>
                              <AccordionTrigger>{question}</AccordionTrigger>
                              <AccordionContent>{response}</AccordionContent>
                           </AccordionItem>
                        )
                     })
                  }
               </Accordion>
            </div>
         </ContainerGrid>
      </section>
   )
}

export default SectionQuestions;