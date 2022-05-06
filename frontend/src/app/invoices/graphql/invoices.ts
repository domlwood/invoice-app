import { gql } from 'apollo-angular';

export const getAllInvoices = gql`
  query invoices {
    invoices {
      data {
        attributes {
          key
          title
          recipientEmail
          issueDate
          dueDate
          recurring
          itemsList {
            item
            quantity
            price
            total
          }
          additionalNotes
          status
          createdAt
        }
      }
    }
  }
`;
