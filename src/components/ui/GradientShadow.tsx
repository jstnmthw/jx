import React, { FC } from 'react'

/**
 * Cast a cool looking gradient border shadow
 *
 * @param position top | right | bottom | left
 */
const GradientShadow: FC<{ position?: string }> = ({ position = '' }) => {
    let style: string
    let vertical = false
    let tGradient =
        'w-full h-full [background-image:linear-gradient(220deg,rgba(0,0,0,0)_0%,#8B5CF6_30%,#3B82F6_70%,rgba(0,0,0,0)_100%)]'
    let rGradient =
        'w-full h-full [background-image:linear-gradient(180deg,rgba(0,0,0,0)_0%,#8B5CF6_30%,#3B82F6_70%,rgba(0,0,0,0)_100%)]'
    let bGradient =
        'w-full h-full [background-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,#8B5CF6_30%,#3B82F6_70%,rgba(0,0,0,0)_100%)]'
    let lGradient =
        'w-full h-full [background-image:linear-gradient(0deg,rgba(0,0,0,0)_0%,#8B5CF6_30%,#3B82F6_70%,rgba(0,0,0,0)_100%)]'
    let gradient = bGradient
    switch (position.toLowerCase()) {
        case 'top':
            style = 'inset-y-0 -top-px w-full h-[2px]'
            gradient = tGradient
            break
        case 'right':
            gradient = rGradient
            style = 'inset-y-0 -right-px h-full w-[2px]'
            vertical = true
            break
        case 'left':
            gradient = lGradient
            style = 'inset-y-0 -left-px h-full w-[2px]'
            vertical = true
            break
        default:
            style = 'inset-x-0 -bottom-px h-[2px] w-[90%] m-auto'
    }
    return (
        <div className={`absolute flex ${style}`}>
            <div className={`${gradient}`}></div>
            <div className={`${gradient} -ml-[100%] blur-sm`}></div>
            <div className={`${gradient} -ml-[100%] blur-[5px]`}></div>
        </div>
    )
}

export default GradientShadow
