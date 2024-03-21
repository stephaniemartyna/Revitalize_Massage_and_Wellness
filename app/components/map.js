import React from "react";

export default function Map() {
    return (
        <div className="mapouter">
            <div className="gmap_canvas pb-20">
                <iframe
                    width="100%"
                    height="603"
                    id="gmap_canvas"
                    frameBorder="0"
                    src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=%20Heritage%20Pointe+(Revitalize%20Massage%20and%20Wellness)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
            </div>
        </div>
    );
}
