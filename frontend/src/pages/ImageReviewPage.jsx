import React from "react";
import NavbarTop from "../components/NavbarTop";
import ImagePageHeader from "../components/ImagePageHeader";
import ImagePreview from "../components/ImagePreview";
import ImageThumbnail from "../components/ImageThumbnail";
import ImageStatus from "../components/ImageStatus";
import ImageActionButtons from "../components/ImageActionButton";

const ImageReviewPage = () => {
    return (
        <div className="flex h-dvh flex-col overflow-y-auto pb-24">
            <NavbarTop />
            <ImagePageHeader />
            <ImagePreview />
            <ImageThumbnail />
            <ImageStatus />
            <ImageActionButtons/>
        </div>

    )
}

export default ImageReviewPage