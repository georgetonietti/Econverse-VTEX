import { ComponentProps } from 'react';
import '../../styles/components/button/button.sass'

interface ButtonProps extends ComponentProps<'button'> {

}
export default function Button(props: ButtonProps) {

   return ( 
       <button className='button' {...props} />
   );
}