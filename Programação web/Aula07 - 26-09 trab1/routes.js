import { Router, json } from 'express'
import { ListarAnimais, IncluirAnimais, AlterarAnimal, ExclusãoAnimal, PesquisaNomeAnimal, PesquisaDonoAnimal} from './controllers/AnimaisController.js'
import{AlterarServiços, IncluirServiços, ListarServiço, ExclusãoServiço, PesquisaNomeServiço, } from './controllers/ServicosController.js'
import{ListarAgendamentos, IncluirAgendamento} from './controllers/AgendamentoController.js'
const router = Router()

router.use(json())

router.get('/animais', ListarAnimais)
      .post('/animais', IncluirAnimais)
      .put('/animais/animal/:id', AlterarAnimal)
      .delete('/animais/animal/:id', ExclusãoAnimal)
      .get('/animais/nome/:nome', PesquisaNomeAnimal) 
      .get('/animais/dono/:dono', PesquisaDonoAnimal) 

router.get('/servicos', ListarServiço )
      .post('/servicos', IncluirServiços)
      .put('/servicos/servico/:id', AlterarServiços)
      .delete('/servicos/:id', ExclusãoServiço )
      .get('/servicos/nome/:nome',PesquisaNomeServiço ) 

router.get('/agendamentos',ListarAgendamentos)
      .post('/agendamentos', IncluirAgendamento  )


export default router