import { ReactNode } from 'react';
import '../../styles/components/banner/banner.sass'

interface BannerProps {
    imageUrl: string;
    children: ReactNode
}

export default function Banner({ imageUrl, children }: BannerProps) {
    return (
        <section className='bannerContainer'>
            <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="banner-overlay">
                    <div className="banner-content">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}