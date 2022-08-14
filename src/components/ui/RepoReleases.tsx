import axios from 'axios'
import React, { FC, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import useSWRImmutable from 'swr/immutable'

interface GithubReleaseProps {
    tag_name: string
    html_url: string
}

const RepoReleases: FC = () => {
    /**
     * Utilizing SWR's caching thus we don't need to waste extra calls to GitHub's
     * strict API limits. Using SWRImmutable disables all revalidation but keeps
     * cached results.
     */
    const repoApiUrl = 'https://api.github.com/repos/jstnmthw/jx/releases'
    const { data } = useSWRImmutable(repoApiUrl, () =>
        axios
            .get(repoApiUrl)
            .then(res => res.data)
            .catch(e => {
                if (e?.response?.status != 403) throw e
            })
    ) as { data: GithubReleaseProps[] }

    if (!data) return <>-</>

    return (
        <Menu as="div" className="relative block text-left">
            <Menu.Button className="group text-sm font-medium text-slate-600 transition-colors dark:text-slate-400 dark:hover:text-slate-300">
                v{data[0]?.tag_name}
                <ChevronDownIcon className="inline-block h-4 w-4 transition-colors dark:text-slate-600 dark:group-hover:text-slate-500" />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="highlight absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800">
                    {data.map((release, idx) => {
                        return (
                            <Menu.Item key={idx}>
                                {({ active }) => (
                                    <a
                                        target="_blank"
                                        href={release.html_url}
                                        type="button"
                                        className={
                                            (active
                                                ? 'font-medium text-slate-800 dark:text-slate-200'
                                                : 'font-medium text-slate-500 dark:text-slate-400') +
                                            ' b-0 block w-full px-3 py-1.5 text-sm'
                                        }
                                        rel="noreferrer">
                                        v{release.tag_name}
                                    </a>
                                )}
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default RepoReleases
