package fr.sma.java.app.repository;

import fr.sma.java.app.domain.ActeGestionDelai;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ActeGestionDelai entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ActeGestionDelaiRepository extends JpaRepository<ActeGestionDelai, Long> {

}
