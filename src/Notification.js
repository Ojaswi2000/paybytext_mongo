import React from 'react'

const Notification = () => {
    const Message = React.forwardRef(({ type, ...rest }, ref) => {
        return (
          <Notification ref={ref} {...rest} type={type} header={type}>
            <p>To change your email address, you will need to update your email address in your UPS profile. It may take upto 24 hours for any email changes to be reflected in the billing center.</p>
          </Notification>
        );
      });
  return (
    <div>

    </div>
  )
}

export default Notification