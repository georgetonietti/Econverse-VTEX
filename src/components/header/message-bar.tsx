import { ElementType, ReactNode } from "react";
import '../../styles/components/header/message-bar.sass'

interface MessageBarProps {
    children: ReactNode,
    icon: ElementType
}

export default function MessageBar({children, icon: Icon}: MessageBarProps) {
   return ( 
       <div className="messageContent">
        <Icon className="icon" />
        {children}
       </div>
   );
}