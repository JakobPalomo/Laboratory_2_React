import "./general.css";

function QuickLink() {
  return (
    <div>
      <div className="display-bottom">
        <h1>Quick Link</h1>
        <button className="links"> Order Status</button>
        <button className="links"> Shopping Help</button>
        <button className="links"> Your Saves</button>

        <p className="texts">
          Price displayed are inclusive of all taxes and duties. Free delivery
          for all orders. Apple Pencil sold separately.
        </p>

        <p className="texts">
          ⁺ New subscribers only. ₱139.00/month after trial. Offer available for
          a limited time to new subscribers who connect an eligible device to an
          Apple device running iOS 15 or iPadOS 15 or later. Offer good for 3
          months after eligible device pairing. No audio product purchase
          necessary for current owners of eligible devices. Plan automatically
          renews until cancelled. Restrictions and other terms apply.
        </p>
        <p className="texts">
          ° New and qualified returning subscribers only. ₱369/month after free
          trial. Only one offer per Apple ID and only one offer per family if
          you’re part of a Family Sharing group, regardless of the number of
          devices you or your family purchases. This offer is not available if
          you or your Family have previously accepted an Apple TV+ three months
          free or one year free offer. Offer good for 3 months after eligible
          device activation. Plan automatically renews until cancelled.
          Restrictions and other terms apply.
        </p>
        <p className="texts">
          1. Special pricing available to qualified customers. To learn more
          about how to start qualifying for special pricing, talk to an Apple
          Specialist in a store or give us a call on 1800-1651-0525 (Smart /
          PLDT), 1800-8474-7382 (Globe).
        </p>
      </div>
    </div>
  );
}

export default QuickLink;
