import React, { memo } from "react";

const ProjectCard = ({ title, description }) => {
    return (
        <div className="bg-slate-500 rounded-2xl border border-white/10 overflow-hidden hover:scale-[1.03] transition duration-500">

            <div className="h-56 bg-gray-800"></div> {/* Replace with image later */}

            <div className="p-6">
                <h3 className="text-xl font-semibold  text-purple-900">{title}</h3>
                <p className="text-gray-300 mt-3 text-sm">{description}</p>

                <button className="mt-6 text-white hover:text-purple-600 transition">
                    View Project →
                </button>
            </div>
        </div>
    );
};

export default memo(ProjectCard);
