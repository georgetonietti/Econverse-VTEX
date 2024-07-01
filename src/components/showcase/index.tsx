import { ReactNode } from 'react';
import '../../styles/components/showcase/showcase.sass'

interface ShowcaseProps {
    imageUrl: string;
    children?: ReactNode
    width: string,
    height: string,
    bdr: string
}

export default function Showcase({ imageUrl, width, height, bdr, children }: ShowcaseProps) {
    return (
        <section style={{width: `${width}`, height: `${height}`}}>
            <div className="showcase" style={{ backgroundImage: `url(${imageUrl})`, borderRadius: bdr}}>
                <div className="showcase-overlay">
                    <div className="showcase-content">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}