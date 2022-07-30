import { Switch } from '@headlessui/react'
import { FC, ReactElement, useState } from 'react'

interface InputSwitchProps {
    name?: string
    disabled?: boolean
    className?: string
    children?: ReactElement
    onChange: (checked: boolean) => void
    defaultValue?: boolean
}

const InputSwitch: FC<InputSwitchProps> = ({
    name,
    disabled,
    className,
    children,
    onChange,
    defaultValue = false
}) => {
    const [enabled, setEnabled] = useState(defaultValue)
    return (
        <Switch.Group>
            <div className="flex items-center justify-between">
                {children && (
                    <Switch.Label className="mr-4">{children}</Switch.Label>
                )}
                <Switch
                    disabled={disabled}
                    name={name}
                    checked={enabled}
                    onChange={checked => {
                        setEnabled(checked)
                        onChange(checked)
                    }}
                    className={`
                    ${className && className} 
                    ${enabled ? 'bg-emerald-500' : 'bg-slate-200'} 
                    ${
                        disabled && 'cursor-not-allowed'
                    } relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:ring-offset-2`}>
                    <span
                        className={`${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                </Switch>
            </div>
        </Switch.Group>
    )
}

export default InputSwitch
