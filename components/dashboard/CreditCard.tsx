interface CreditCardProps {
  card: {
    id: number;
    number: string;
    expirationMonth: string;
    expirationYear: string;
    nameCard: string;
    userId: string | null;
    cvc: string;
  };
}

export async function CreditCard({ card }: CreditCardProps) {
  const { expirationMonth, expirationYear, nameCard, number, cvc } = card;

  function spaceNumber(str: string) {
    return str.replace(/(\d{4})/g, "$1 ");
  }

  return (
    <div className="card hover:scale-80 transition-transform">
      <div className="card-inner">
        <div className="front">
          <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img" />
          <div className="row">
            <img src="https://i.ibb.co/G9pDnYJ/chip.png" width="60px" />
            <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px" />
          </div>
          <div className="row card-no">{spaceNumber(number)}</div>
          <div className="row card-holder">
            <p></p>
            <p>VALID TILL</p>
          </div>
          <div className="row name">
            <p>{nameCard}</p>
            <p>
              {expirationMonth} / {expirationYear.slice(-2)}
            </p>
          </div>
        </div>
        <div className="back">
          <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img" />
          <div className="bar"></div>
          <div className="row card-cvv">
            <div>
              <img src="https://i.ibb.co/S6JG8px/pattern.png" />
            </div>
            <p>{cvc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
