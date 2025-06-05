"use client";

import { useState } from "react";
import { Project } from "@/lib/types";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import StatusChip from "./StatusChip";

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Project Preview Card */}
      <div
        className="relative cursor-pointer block transition project-card hover:scale-[1.02] hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-800 rounded-2xl"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative flex flex-col md:flex-row items-center overflow-hidden">
          <div className="flex justify-center items-center p-4 w-full md:w-1/3">
            <div className="relative h-48 w-full rounded-2xl overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="p-6 md:w-2/3 w-full flex flex-col gap-2">
            <div className="absolute top-4 right-4 text-right text-xs text-gray-500 dark:text-gray-400 space-y-0.5">
              <div>{project.date}</div>
              <div>{project.status.replace("-", " ")}</div>
            </div>

            <h3 className="text-left h3 font-semibold text-gray-800 dark:text-white pr-24">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
        aria-labelledby={`project-${project.title}-title`}
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-3xl rounded-xl bg-white dark:bg-gray-900 shadow-xl p-6 overflow-y-auto max-h-[90vh] relative">
            {/* Top-right chips + close button */}
            <div className="absolute top-4 right-4 flex items-start justify-end gap-2">
              <StatusChip status={project.status} />

              {/* Date Chip */}
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                {project.date}
              </span>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                aria-label="Close project details"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Accessible title element */}
            <h2
              id={`project-${project.title}-title`}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              {project.title}
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Expanded Details */}
            {project.expandedDetails && (
              <div className="prose dark:prose-invert">
                <ReactMarkdown>{project.expandedDetails}</ReactMarkdown>
              </div>
            )}

            {/* Carousel Placeholder */}
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-4 mb-4">
              <p className="text-center text-gray-500 dark:text-gray-400">
                [Carousel of images/videos goes here]
              </p>
            </div>

            {/* Skills */}
            {Array.isArray(project.skillsUsed) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skillsUsed.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2 py-1 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
