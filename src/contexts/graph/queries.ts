export const queryMyMoonCats = (user: string): string => {
  return `{
    owners(where: { id: "${user.toLowerCase()}" }) {
      id,
      cats {
        id
        name
        isWrapped
        rescueTimestamp
        activeRequest {
          id
          price
          from
        }
        activeOffer {
          id
          price
          to
        }
        provenance {
          offerPrices {
            id
            price
            to
            timestamp
            filled
            active
          }
          requestPrices {
            id
            price
            from
            timestamp
            filled
            active
          }
        }
      }
    }
  }`;
};

export const queryCatById = (catId: string): string => {
  return `{
    cats(where: { id: "${catId}"} ) {
      id
      name
      isWrapped
      rescueTimestamp
      activeRequest {
        id
        price
        from
      }
      activeOffer {
        id
        price
        to
      }
      provenance {
        offerPrices {
          id
          price
          to
          timestamp
          filled
          active
        }
        requestPrices {
          id
          price
          from
          timestamp
          filled
          active
        }
      }
    }
  }`;
};

export const queryAllCats = (first: number, skip: number): string => {
  return `{
      cats(first: ${first}, skip: ${skip}) {
        id
        name
        isWrapped
        rescueTimestamp
        activeRequest {
          id
          price
          from
        }
        activeOffer {
          id
          price
          to
        }
        provenance {
          offerPrices {
            id
            price
            to
            timestamp
            filled
            active
          }
          requestPrices {
            id
            price
            from
            timestamp
            filled
            active
          }
        }
      }
  }`;
};

export const queryAllRequests = (): string => {
  return `{
    requestPrices(where: {active_in: [true]}) {
      id
      price
      from
      timestamp
      filled
      active
    }
  }`;
};

export const queryAllOffers = (first: number, lastId = ""): string => {
  return `{
    offerPrices(where: {active_in: [true], id_gt: "${lastId}"}, first: ${first}) {
      id
      price
      to
      timestamp
      catRescueTimestamp
      filled
      active
    }
  }`;
};
