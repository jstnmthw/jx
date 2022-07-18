import { FC } from 'react'

const LoadingIcon: FC<{ className: string; duration?: string }> = ({
    className = '',
    duration = '0.6s'
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            className={className}>
            <path
                fill="currentColor"
                d="M25.251 6.461c-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615V6.461z">
                <animateTransform
                    attributeName="transform"
                    attributeType="xml"
                    dur={duration}
                    from="0 25 25"
                    repeatCount="indefinite"
                    to="360 25 25"
                    type="rotate"
                />
            </path>
        </svg>
    )
}
export default LoadingIcon
