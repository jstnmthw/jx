const Errors = ({
    errors = [],
    ...props
}: {
    errors: []
    className?: string
}) => (
    <>
        {errors?.length > 0 && (
            <div {...props}>
                <ul className="mb-1.5 list-inside list-disc text-xs text-red-600">
                    {errors?.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            </div>
        )}
    </>
)

export default Errors
