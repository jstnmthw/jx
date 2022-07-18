const Errors = ({
    errors = [],
    ...props
}: {
    errors: []
    className: string
}) => (
    <>
        {errors?.length > 0 && (
            <div {...props}>
                <ul className="mt-3 list-inside list-disc text-sm text-red-600">
                    {errors?.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            </div>
        )}
    </>
)

export default Errors
