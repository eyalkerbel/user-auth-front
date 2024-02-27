export function getMessageByStatus(status: number): string {
  switch (status) {
    case 409:
      return "A user with the same email already exists."
      break
    case 500:
      return 'Error in server'
      break;
    default:
      return 'Error in Connection'
  }
}