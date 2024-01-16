import { twMerge } from 'tailwind-merge';

interface ButtonProps {
   text?: string
   className?: string
}

export default function Button({ text = 'Conectar carteira', className = '' }: ButtonProps) {

   const defaultClass = 'bg-blue-primary py-4 px-7 rounded-full font-medium hover:bg-blue-600 transition-colors ease-linear'
   const combinedClass = twMerge(defaultClass, className);

   return (
      <button className={combinedClass}>
         {text}
      </button>
   )
}