import React from 'react'
import './styles/BadgeDetails.css'
import header from "../images/badge-header.svg"
import Badge from '../components/Badge'
import { Link } from 'react-router-dom'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function BadgeDetails(props) {
  const badge = props.badge

  return (
    <>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={header} alt="Logo" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              name={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle} />
          </div>
          <div className="col-6">
            <h2>Acciones</h2>
            <div>
              <Link
                className="btn btn-primary mb-4"
                to={`/badges/edit/${badge.id}`}
              >
                Editar
                </Link>
            </div>
            <div>
              <button
              onClick={props.onOpenModal}
                className="btn btn-danger"
              >
                Eliminar
                </button>
                <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgeDetails